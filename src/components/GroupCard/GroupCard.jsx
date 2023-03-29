const GroupCard = ({ group }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-lg">
            <figure>
                <img src={group.image} alt="" className="aspect-[2/1] object-cover" />
            </figure>
            <div className="p-3">
                <div className="flex justify-between gap-2">
                    <div className="flex items-start gap-3">
                        <div className="mask mask-circle bg-base-200 p-1 text-2xl">
                            {group.icon}
                        </div>
                        <div>
                            <div
                                className="cursor-pointer truncate text-base font-bold leading-6 hover:text-primary"
                                data-tip={group.name}
                            >
                                {group.name}
                            </div>
                            <div className="text-xs text-gray-500">
                                {group.members} members
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupCard;
