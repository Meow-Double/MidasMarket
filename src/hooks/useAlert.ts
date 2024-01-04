

const useAlert = (callbacks: Function[], time = 1): void => {

  setTimeout(() => {
    callbacks.forEach((element: Function) => {
        element(false);
    });
  }, time * 1000);
;
};

export default useAlert;