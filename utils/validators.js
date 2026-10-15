const EMAIL_SUFFIX = '.sherubtse@rub.edu.bt';

function isValidSherubtseEmail(email) {
  if (typeof email !== 'string') return false;

  const normalizedEmail = email.trim().toLowerCase();
  return normalizedEmail.endsWith(EMAIL_SUFFIX) && normalizedEmail.includes('@');
}

module.exports = { isValidSherubtseEmail, EMAIL_SUFFIX };
