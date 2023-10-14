export const registerNewUser = async (body: Object) => {
  try {
    const backend_url = "http://127.0.0.1:8000";
    const response = await fetch(`${backend_url}/accounts/create-customer/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    if (data.token) {
      localStorage.setItem("rosewareAuthToken", data.token);
      return data;
    } else {
      console.log("No Token Received");
    }

  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (body: Object) => {
  try {
    const backend_url = "http://127.0.0.1:8000";
    const response = await fetch(`${backend_url}/accounts/login/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return data;

  
  } catch (error) {
    console.log(error);
  }
};

export const validateUser = async (token: string | null) => {

  try {
    const backend_url = "http://127.0.0.1:8000";
    const response = await fetch(`${backend_url}/accounts/customer/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const data = await response.json();
    return data

  } catch (error) {
    console.log("Returning error: ", error);
  }
};
