import user from '../../../../assets/img/user.png';

const FundManagers = () => (
  <div className="flex flex-col justify-between items-start gap-4">
    <div className="text-xl font-bold">Fund Manager(s)</div>
    <div className="flex flex-col justify-center items-start gap-4 p-2">
      <div>
        <div className="avatar">
          <div className="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user} alt="about" loading="lazy" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>Lalit Kumar</span>
      </div>
      <div>
        <div className="avatar">
          <div className="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user} alt="about" loading="lazy" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>Sharmilla D'mello</span>
      </div>
    </div>
  </div>
);

export default FundManagers;
