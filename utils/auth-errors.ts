export const getAuthError = (error: any): string => {
  // Supabase error codes and messages
  const errorMessages: Record<string, string> = {
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/email-already-in-use": "An account already exists with this email.",
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed":
      "Network error. Please check your connection.",
    // Add more error codes as needed
  };

  // Extract error code from Supabase error
  const errorCode = error?.code || error?.message;
  return (
    errorMessages[errorCode] ||
    "An unexpected error occurred. Please try again."
  );
};
