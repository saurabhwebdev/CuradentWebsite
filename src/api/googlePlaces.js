const API_URL = process.env.REACT_APP_API_URL;

export const fetchGoogleReviews = async () => {
  try {
    const response = await fetch(`${API_URL}/api/google-reviews`);
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 