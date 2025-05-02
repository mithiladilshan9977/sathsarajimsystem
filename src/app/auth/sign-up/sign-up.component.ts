import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent   {

  @Output() closeSignUpEvent = new EventEmitter<void>();

  
   APIURL = environment.APIURL;
  signUpForm: FormGroup;
  loginFormOtherUser: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'assets/images/pwd-hidden.png';
  reenterPasswordType: string = 'password';
  reenterPasswordIcon: string = 'assets/images/pwd-hidden.png';
  imagePreview: string | ArrayBuffer | null = null;
  isloginclicked: boolean = false;
  isPasswordVisible: boolean = false;

  selectedGender: string = '';
usedGymBefore: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reenterpassword: ['', [Validators.required, Validators.minLength(6)]],
      commapylogo: ['', Validators.required],
    });

    this.loginFormOtherUser = this.fb.group({
      username: ['', Validators.required],
      companyname: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reenterpassword: ['', [Validators.required, Validators.minLength(6)]],
      commapylogo: ['', Validators.required],
    });

  }


  closesignup() {
    this.closeSignUpEvent.emit();
  }

  selectGender(value: string) {
    this.selectedGender = value;
  }
  
  selectUsedGym(value: string) {
    this.usedGymBefore = value;
  }
  
  login() {
    this.isloginclicked = true;
  }
  signup() {
    this.isloginclicked = false;
  }
  togglePasswordVisibilityLogin(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
  onImageSelect(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];
  
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/png' || fileType === 'image/jpeg') {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result; // Optional preview
        };
        reader.readAsDataURL(file);
  
        // Set File object in the form control
        this.signUpForm.patchValue({
          commapylogo: file
        });
      } else {
        alert('Please select a PNG or JPEG image.');
      }
    }
  }
  
  get passwordsMatch() {
    return (
      this.signUpForm.get('password')?.value ===
      this.signUpForm.get('reenterpassword')?.value
    );
  }


  async onSubmit(): Promise<void> {
    if (!this.passwordsMatch) {
      alert('Passwords do not match!');
      return;
    }
  
    const username = this.signUpForm.get('username')?.value;
    const emailaddress = this.signUpForm.get('emailaddress')?.value;
    const password = this.signUpForm.get('password')?.value;
    const reenterpassword = this.signUpForm.get('reenterpassword')?.value;
    const companyname = this.signUpForm.get('companyname')?.value;
    const companyLogoFile = this.signUpForm.get('commapylogo')?.value;
  
    if (companyLogoFile && companyLogoFile instanceof File) {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('emailaddress', emailaddress);
      formData.append('password', password);
      formData.append('reenterpassword', reenterpassword);
      formData.append('companyname', companyname);
      formData.append('companylogo', companyLogoFile); // Append File directly
  
      try {
        const response: any = await this.http
          .post(this.APIURL + 'sign_up', formData)
          .toPromise();
  
        if (response.message === 'User successfully registered!') {
          alert('User created successfully');
          this.signUpForm.reset();
          this.router.navigate(['/auth/log-in']);
          sessionStorage.setItem('justsignedupemailissent', 'yes');
          
        } else {
          console.error('Error:', response.message);
        }
      } catch (error: any) {
        if (error.status === 400) {
          if (error.error?.message === 'Email already exists!') {
            alert('Email address already exists. Please try again.');
          } else {
            alert('An error occurred during registration. Please try again later.');
          }
        } else {
          console.error('There was an error!', error);
          alert('An unexpected error occurred. Please try again.');
        }
      }
    } else {
      alert('Please upload a valid image for the company logo.');
    }
  }


  async onSubmitLoginOtherUserDetails(): Promise<void> {
    const emailaddress = this.loginFormOtherUser.get('emailaddress')?.value;
    const password = this.loginFormOtherUser.get('password')?.value;

    const payload = {
      emailaddress,
      password,
    };

    try {
      const response: any = await this.http
        .post(this.APIURL + 'log_in_other_user', payload, {
          headers: { 'Content-Type': 'application/json' },
        })
        .toPromise();

      if (response.message === 'Logged in successfully') {
        const userId = response.userid;
        const adminUserId = response.adminuserid;

        

        localStorage.setItem('userId', adminUserId);
        localStorage.setItem('otheruserid', userId);
        this.router.navigate(['/home']);
      } else if (response.message === 'No user found') {
        alert('No user found');
      } else {
        console.error('Error:', response.message);
      }
    } catch (error: any) {
      if (error.status === 400) {
        alert('Please check your login credentials');
      } else {
        console.error('There was an error!', error);
        alert('An unexpected error occurred. Please try again.');
      }
    }
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      if (this.passwordType === 'password') {
        this.passwordType = 'text';
        this.passwordIcon = 'assets/images/pwd-show.png';
      } else {
        this.passwordType = 'password';
        this.passwordIcon = 'assets/images/pwd-hidden.png';
      }
    } else if (field === 'reenterpassword') {
      if (this.reenterPasswordType === 'password') {
        this.reenterPasswordType = 'text';
        this.reenterPasswordIcon = 'assets/images/pwd-show.png';
      } else {
        this.reenterPasswordType = 'password';
        this.reenterPasswordIcon = 'assets/images/pwd-hidden.png';
      }
    }
  }

}
