function encrypt(password, text) {

  // move text to base64 so we avoid special chars
  const base64 = btoa( text );

  // text string to array
  const arr = base64.split('');
  // array of password
  const arrPass = password.split('');
  let lastPassLetter = 0;

  // encrypted string
  let encrypted = '';

  // encrypt
  for (let i=0; i < arr.length; i++) {

    const letter = arr[ i ];

    const passwordLetter = arrPass[ lastPassLetter ];

    const temp = getLetterFromAlphabetForLetter(
        passwordLetter, letter );

    if (temp) {
      // concat to the final response encrypted string
      encrypted += temp;
    } else {
      // if any error, return null
      return null;
    }

    /*
      This is important: if we're out of letters in our
      password, we need to start from the begining.
    */
    if (lastPassLetter == (arrPass.length - 1) ) {
      lastPassLetter = 0;
    } else {
      lastPassLetter ++;
    }
  }

  // We finally return the encrypted string
  return encrypted;
}