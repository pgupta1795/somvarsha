import CircleIcon from '@mui/icons-material/Circle';

interface BulletDescriptionInterface {
  content: string[];
}

const BulletDescription = ({ content }: BulletDescriptionInterface) => (
  <div className="flex flex-col gap-y-4 px-2">
    {content.map((co) => (
      <div key={co} className="flex flex-row text-sm items-stretch font-medium">
        <CircleIcon />
        &nbsp;&nbsp;<span>{co}</span>
      </div>
    ))}
  </div>
);

export default BulletDescription;
