import TeamMember from '@/app/team/components/TeamMember';

const TeamMemberList = () => {
  return (
    <ul className="msx-w-xl md:max-w-3xl xl:max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between xl:justify-normal gap-8 lg:gap-12 xl:gap-x-20 2xl:gap-x-36 xl:gap-y-14 2xl:gap-y-16">
      {Array.from({ length: 10 }).map((member, index) => (
        <TeamMember key={index} />
      ))}
    </ul>
  );
};

export default TeamMemberList;
