import axios from 'axios';

function LoginPage() {
  const handleLogin = async () => {
    try {
      const response = await axios.get('/auth/google');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
