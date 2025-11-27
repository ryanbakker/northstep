import React from "react";

import { Text, XStack, YStack } from "tamagui";

import NorthstepIcon from "./NorthstepIcon";

export default function Logo({ hasText = false }: { hasText?: boolean }) {
  return (
    <YStack gap="$3" style={{ alignItems: "center" }} mb="$4">
      <XStack>
        <NorthstepIcon width={55} height={55} />
      </XStack>
      {hasText && (
        <Text fontSize="$7" fontWeight="700" color="$color">
          Northstep
        </Text>
      )}
    </YStack>
  );
}
