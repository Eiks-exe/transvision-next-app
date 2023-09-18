
import LoginForm from "@/app/components/Public/LoginForm/LoginForm";
import { IChannel } from "@/interfaces/channel";
import { channelsMock } from "@/utils/channelsMock";
import { Flex, HStack, VStack, Text } from "@chakra-ui/react";

  export default function Page({ params }: { params: { id: number } }) {
    const currentChannel = channelsMock.find((channel: IChannel) => channel.id == params.id);
    console.log(currentChannel?.id)
    return (
      <Flex
        width={"full"}
        h={"100vh"}
        flexDirection={"column"}
      >
        <LoginForm id={params.id}/>
      </Flex>
    )
  }