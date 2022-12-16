import useAuth from "hooks/useAuth"

const Login = () => {
  const { authLogin } = useAuth()
  return (
    <>
    <button onClick={() => authLogin('google')}>구글</button><button>카카오</button><button>네이버</button>
    </>
  )
}



export default Login