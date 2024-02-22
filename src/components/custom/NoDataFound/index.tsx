import NoData from "@/assets/gif/NoData.gif";

interface noDataProp {
  text?: string;
}

const NoDataFound = ({ text }: noDataProp) => {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto max-w-[300px] xl:max-w-[350px] min-w-[200px]">
        <img src={NoData} alt="no-data" />
        <p className="relative text-center -top-10 text-base lg:text-lg xl:text-xl italic">
          {text ? text : "No Data Found!"}
        </p>
      </div>
    </>
  );
};

export default NoDataFound;
