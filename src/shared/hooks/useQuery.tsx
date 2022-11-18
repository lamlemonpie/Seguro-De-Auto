import React from "react";
import { useUser } from "../contexts/UserProvider";
import endpoints from "../endpoints";

export const useQuery = () => {
  const { setUserName, setEmail } = useUser();

  const runAsyncFunc = React.useCallback(
    (promise: Promise<any>, callback: (data: any) => void) => {
      promise.then(
        (data) => {
          callback(data);
        },
        (error) => {
          console.log("error:", error);
        }
      );
    },
    []
  );

  const getUserQuery = () => {
    runAsyncFunc(endpoints.getRandomUser, (data: any) => {
      if (data["name"]) {
        const name: string = data["name"];
        const firstName = name.split(" ")[0];
        setUserName(firstName);
      }

      if (data["email"]) {
        setEmail(data["email"]);
      }
    });
  };

  return { getUserQuery };
};
