export const registerNewUser = async (body: Object) => {
    try {
      const backend_url = "http://127.0.0.1:8000";
      const response = await fetch(`${backend_url}/accounts/create-customer/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("rosewareAuthToken", data.token);
        return data;
      } else {
        console.log("No Token Found");
      }
    } catch (error) {
      console.log(error);
    }
  };
