import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-gray-500 font-pmedium">{title}</Text>

      <View className="border-2 border-gray-300 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-gray-400 font-psemibold text-lg"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
            source={!showPassword ? icons.eye : icons.eyehide} 
            className="w-6 h-6"
            resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
