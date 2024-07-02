"use client";

import React, { useRef } from "react";
import { TwitchPlayer } from "react-twitch-embed";

interface Props {}

const TwitchLive = (props: Props) => {
  const embed = useRef();

  const handleReady = (e: any) => {
    embed.current = e;
  };

  return (
    <TwitchPlayer
      height="100%"
      width="100%"
      channel="fifatargrean"
      autoplay
      onReady={handleReady}
    />
  );
};

export default TwitchLive;
