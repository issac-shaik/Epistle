import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface DecodedToken {
  id: string;
}

export const decodeToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.id; // Assuming the token has an `id` field
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const fetchUserData = async (userId: string) => {
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
