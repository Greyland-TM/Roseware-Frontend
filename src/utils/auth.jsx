// All input is validated on the server.
export async function createNewUser(body, navigate) {
  const response = await fetch("https://www.api.rosewareintegrations.com/accounts/register", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  console.log(data);

  if (data.ok) {
    // navigate("/");
    // If all input is valid then a user is created and you may now log in.
    // Otherwise an error message is shown.
  } else {
    alert("Failed to create user.");
  }
}

// Handles logging in an existing user
export async function handleLogin(ctx, body, navigate) {
  try {
    const response = await fetch("https://www.api.rosewareintegrations.com/accounts/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
    );
    console.log('Response: ', response);

    const data = await response.json();

    if (data.token) {
      console.log(data);
      ctx.login(); // Logged in state is stores in the app wide context
      ctx.setUser(data.user, data.user.username);
      ctx.setToken(data.token);
      localStorage.setItem("Auth_Token", data.token);
      navigate("/Dashboard");
    }
    else {
      console.log('error');
    }
  }
  catch (errors) {
    console.log(errors)
  };
};

// Handles validating token and resetting login context
export async function validateToken(ctx, token) {
  try {
    const response = await fetch("https://www.api.rosewareintegrations.com/accounts/user", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    const data = await response.json();

    if (data.username) {
      ctx.login(); // Logged in state is stores in the app wide context
      ctx.setUser(data.username, data.username);
      ctx.setToken(token);
    }
  } catch (err) {
    console.log(err);
  }
};

