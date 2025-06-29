import { Icon } from "./UIKit/Elements/Icon"
import { Header, Text } from "./UIKit/Elements/Typography"
import { Flex, FlexCol } from "./UIKit/Layouts/Flex"
import ResetSvg from "./assets/icons/check_circle.svg";

const Cube = () => {
    return <div className="bg-[blue] w-[100px] h-[50px]"></div>
}

export const App = () => {
    return (
        <div className="flex flex-col gap-2 w-fit">
            <h1>Hello World</h1>
            <Header>my header</Header>
            <ResetSvg />
            <Text size={30}>my text</Text>
            <Flex>
                <Icon i="home" />
                <Icon i="search" />
                <Icon i="menu" />
            </Flex>
            <Flex>
                <Cube />
                <div>fff</div>
                <Cube />
            </Flex>
            <FlexCol>
                <Cube />
                <Cube />
            </FlexCol>
        </div>
    )
}
