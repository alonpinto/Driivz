import dateFormat from "dateformat";

const DateUtilService = () => {
  function formatDate(
    timestamp: number,
    _format: string = "yyyy-dd-mm hh:mm:ss"
  ): string {
    return dateFormat(new Date(timestamp), _format);
  }

  return {
    format: formatDate,
  };
};

const instance = DateUtilService();
export { instance as DateUtilService };
