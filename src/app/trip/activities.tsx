import { Text, View } from "react-native"
import { TripData } from "./[id]"

type Props = {
    tripDetails: TripData
}

export function Activities({ tripDatails }: Props){
    return 
    (<View className="flex-1">
        <Text className="text-white">{Activities.destination}</Text>
    </View>
    )
}