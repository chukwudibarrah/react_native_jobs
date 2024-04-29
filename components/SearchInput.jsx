import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-gray-300 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-gray-400 font-psemibold text-lg"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image 
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
};

export default SearchInput;
