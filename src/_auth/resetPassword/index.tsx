import { Button } from "@/components/ui/button";
import { GiHand } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen font-sans  bg-gray-100 flex justify-center items-center w-full ">
      <div className="w-[95%] xs:w-[60%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[25%] ">
        <div className=" items-center  py-6 px-4 lg:px-8 rounded-2xl bg-white">
          <div className="flex justify-center gap-8 text-3xl font-semibold items-center mb-5">
            <p className="">Hello, there </p>
            <p className="text-yellow-400 ">
              <GiHand />
            </p>
          </div>
          <p className="flex justify-center text-gray-500 ">
            {" "}
            A request has been your password. if you made this request, pieces
            click on the buttons below.
          </p>
          <div>
            <Button
              className=" w-[100%] mt-5"
              onClick={() => navigate(`/NewPassword`)}
            >
              Reset Password
            </Button>
          </div>
          <div className="flex justify-center gap-2 mt-5 ">
            <p> Remember password? </p>
            <p
              className="text-[#0073EA] "
              onClick={() => navigate(`/auth/login`)}
            >
              {" "}
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
