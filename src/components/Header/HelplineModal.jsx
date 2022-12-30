import React from "react";

export default function HelplineModal() {
    return (
        <div className="absolute top-7 md:top-8 left-14 md:left-24 bg-[#002366]">
            <div className="mx-7 space-y-3 py-2">
                <div className="text-soft ">
                    <a href={`tel:+915555555`}>+916555555</a>
                </div>
                <div className="text-soft ">
                    <a href={`tel:+91$5555555`}>+9155555</a>
                </div>
            </div>
        </div>
    );
}
