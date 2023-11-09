import Image from 'next/image';
import { TeamInfoType } from '@/data/team';

type TeamMemberProps = {
  member: TeamInfoType;
};

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <li className="flex flex-col gap-2">
      <Image src={member.img} alt={member.name} className="rounded-full " />
      <h3 className="text-center text-sm-16 font-medium text-lightdark lg:text-base">
        {member.name}
      </h3>
    </li>
  );
};

export default TeamMember;
