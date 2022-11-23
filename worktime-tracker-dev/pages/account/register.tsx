export default function Register() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
      event.preventDefault()
  
      const data = {
        email: event.target.email.value,
        password: event.target.password.value,
      }
  
      const JSONdata: string = JSON.stringify(data)
      const endpoint: string = '/api/user/register'
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }

      const response = await fetch(endpoint, options)
  
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" required />
  
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
  
        <button type="submit">Submit</button>
      </form>
    )
  }