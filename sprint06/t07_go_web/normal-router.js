exports.calculateTime = () => {
    let start = new Date("01-02-1939");
    let end = new Date();
    let obj = {
      years() {
        return end.getFullYear() - start.getFullYear();
      },
      months() {
       return end.getMonth() - start.getMonth();
      },
      days(){
         return end.getDate() - start.getDay();
      }
    };
    return obj
  };