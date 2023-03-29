import React from 'react';
import GroupCard from '../GroupCard/GroupCard';

const newGroups = [
    {
        id: "1",
        name: "Cooks",
        icon: "🍳",
        image: "Cooks",
        members: "100",
    },
    {
        id: "2",
        name: "Yoga - the art of living",
        icon: "🧘‍♀️",
        image: "Yoga",
        members: "500",
    },
    {
        id: "3",
        name: "Magic",
        icon: "🧙‍♀️",
        image: "Magic",
        members: "25",
    },
];

const discoverGroups = [
    {
        id: "1",
        name: "Artists",
        icon: "🎨",
        image: "Artists",
        members: "100",
    },
    {
        id: "2",
        name: "Guitarists",
        icon: "🎸",
        image: "Guitarists",
        members: "500",
    },
    {
        id: "3",
        name: "Singers",
        icon: "🎤",
        image: "Singers",
        members: "25",
    },
    {
        id: "4",
        name: "Dancers",
        icon: "🕺",
        image: "Dancers",
        members: "75",
    },
    {
        id: "5",
        name: "Comedians",
        icon: "🤡",
        image: "Comedians",
        members: "27",
    },
    {
        id: "6",
        name: "Cycling",
        icon: "🚴‍♀️",
        image: "Cycling",
        members: "1267",
    },
];

function Community({ isTab }) {
  return (
      <div
          className={`w-full ${isTab ? "px-2 py-0" : "border-x px-5 py-3 sm:px-8"
              } border-base-300 `}
      >
          <div className="text-xl font-bold sm:text-2xl">Your Community</div>
          <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {newGroups.map((group) => (
                  <GroupCard key={group.id} group={group} />
              ))}
          </div>
          <div className="mt-10 text-xl font-bold sm:text-2xl">Explore Community</div>
          <div className="my-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {discoverGroups.map((group) => (
                  <GroupCard key={group.id} group={group} />
              ))}
          </div>
      </div>
  )
}

export default Community