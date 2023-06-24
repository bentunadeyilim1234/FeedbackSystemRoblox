'use client';

import Link from "next/link";
import Image from "next/image";

const UserCard = ({...props}) => { 
    return(
        <li key={props.feedbackId} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 relative">
            <div className="flex justify-between items-center mb-2">
                <Image src={"https://tunaonair.pythonanywhere.com/thumb/" + props.userId} alt="Player Avatar" className="w-7 h-7 rounded-full mr-2" width={150} height={150} />
                <span className="text-lg font-semibold">Feedback ID: {props.feedbackId}</span>
                <a href={"/delete/" + props.feedbackId} className="text-red-500 hover:text-red-700">Delete</a>
            </div>
            <p><strong>Suggested Feature: </strong>{props.feedback}</p>
            <div className="flex items-center">
                <p><strong>Player: </strong><a target="_blank" href={"https://www.roblox.com/users/" + props.userId + "/profile"}>{props.playerName}</a> </p>
            </div>
            <div className="flex items-center">
                <p><strong>Rating: </strong>{props.rating}/10</p>
            </div>
        </li>
    )
}

export default UserCard;