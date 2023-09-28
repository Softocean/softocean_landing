import TeamMember from '@/app/team/components/TeamMember';
import { teamInfo } from '@/data/team';

const TeamMemberList = () => {
  return (
    <ul className="msx-w-xl mx-auto flex flex-wrap justify-center gap-8 md:max-w-3xl md:justify-between  xl:max-w-4xl ">
      {teamInfo.map((member) => (
        <TeamMember key={member.id} member={member} />
      ))}
    </ul>
  );
};

export default TeamMemberList;
