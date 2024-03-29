import { TIME_OUT } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const callAPI = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const result = await Promise.race([fetchPromise, timeout(TIME_OUT)]);

    if (!result.ok)
      throw new Error("Some error has occurred while consuming API");
    return result;
  } catch (error) {
    throw error;
  }
};
