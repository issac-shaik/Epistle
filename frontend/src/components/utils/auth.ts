import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.id; // Assuming the token has an `id` field
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const fetchUserData = async (userId: number) => {
  try {
    const response = await axios.get(
      `https://anon.issac-shaik.workers.dev/api/v1/user/users/${userId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
};
