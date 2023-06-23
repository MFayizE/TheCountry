import FaceBookLogo from "./Logo/FaceBookLogo";
import GoogleLogo from "./Logo/GoogleLogo";
import LinkedinLogo from "./Logo/LinkedinLogo";
import TwitterLogo from "./Logo/TwitterLogo";

const SocialLogo = () => {
  return (
    <div className="flex justify-around gap-4 ">
      <div className="cursor-pointer">
        <GoogleLogo />
      </div>
      <div className="cursor-pointer">
        <FaceBookLogo />
      </div>
      <div className="cursor-pointer">
        <LinkedinLogo />
      </div>
      <div className="cursor-pointer">
        <TwitterLogo />
      </div>
    </div>
  );
};

export default SocialLogo;
