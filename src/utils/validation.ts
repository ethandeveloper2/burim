import { emailValidation } from '@Constants/validation';

export function validateEmail(email : string) {
  const emailRegexPattern = emailValidation;
  
  if (emailRegexPattern.test(email)) {
    return {
      result: true,
      message: ''
    };
  } else{
    return {
      result: false,
      message: '잘못된 유형의 이메일입니다.'
    }
  }
}