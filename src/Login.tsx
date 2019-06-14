import React from 'react'
import SignupTextInput from './SignupTextInput'

export default class Login extends React.Component<{}> {
  async onLogin() {
    // Stub
    console.log('onLogin')
  }

  async onForgot() {
    // Stub
    console.log('onForgot')
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div>Survive With Me</div>
        <div
          style={{
            backgroundColor: '#efefef',
            borderRadius: 4,
            border: '1px solid black',
            padding: 8,
            maxWidth: 400,
            maxHeight: 200,
          }}
        >
          <SignupTextInput autoFocus type="text" placeholder="email" />
          <SignupTextInput
            type="password"
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                this.onLogin()
              }
            }}
            placeholder="password"
          />
          <div
            style={{
              margin: 8,
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}
          >
            <div>
              <button onClick={this.onLogin}>Login</button>
            </div>
            <div>
              <button onClick={this.onForgot}>Forgot</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}