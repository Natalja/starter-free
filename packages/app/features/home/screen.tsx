import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchRouterButton pagesMode={pagesMode} />
            <SwitchThemeButton />
          </>
        )}
      </XStack>

      <YStack gap="$4">
        <H1 ta="center" col="$color12">
          Welcome to Tamagui.
        </H1>
        <Paragraph col="$color10" ta="center">
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
        <Separator />
        <Paragraph ta="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>

      <Button {...linkProps}>Link to user</Button>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const toast = useToastController()

  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80,50]}
        defaultPosition={1}
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        {/*<Sheet.Handle bg="$gray8" />*/}
        <Sheet.Frame ai="center" jc="center" gap="$10" bg="$color2">
          <Sheet.ScrollView>
            <Paragraph ta="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla purus ut tempor luctus. Duis vitae tincidunt elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vitae nunc nec nisl tristique auctor vel ac justo. Etiam ut maximus risus. Morbi quis risus ac sem porttitor finibus. Donec iaculis risus sit amet molestie dignissim. Donec at orci at velit pellentesque consequat. Vestibulum ultrices risus et neque sollicitudin fermentum ut vel ante.

              Curabitur nec vestibulum magna. Mauris at velit vitae lectus imperdiet convallis. Proin nec tempus turpis, sed semper erat. Curabitur ac rhoncus libero, vel laoreet lacus. Cras vehicula fermentum justo sed porttitor. Phasellus sollicitudin egestas enim, ac molestie nunc vestibulum vitae. Curabitur purus est, rutrum pretium congue quis, fringilla sit amet sem. Vivamus eu augue ante. Integer velit velit, pharetra ut porttitor eget, porttitor eget neque. Phasellus id placerat eros.

              Donec finibus enim dictum feugiat tempus. Fusce non felis tempus, dignissim erat in, luctus lacus. Ut vestibulum bibendum erat eu lobortis. Suspendisse tincidunt odio non mauris placerat lacinia. Maecenas vel posuere risus, et gravida odio. Praesent at elementum eros. Aenean efficitur id metus eget volutpat. Fusce pulvinar ligula eget arcu accumsan rutrum. Quisque sed porttitor augue. Nullam in tincidunt nisl, et condimentum risus.

              Sed at iaculis urna, vel dapibus orci. Curabitur ultricies, ex eu scelerisque malesuada, ante risus pulvinar nisi, et accumsan sapien nisi a felis. Morbi egestas aliquam condimentum. Donec semper ac est vel mattis. Aliquam ultricies sit amet leo sit amet consectetur. Nullam scelerisque et nibh nec maximus. Nulla maximus consectetur est, eget molestie justo eleifend id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed rhoncus pulvinar feugiat.

              Praesent laoreet ex quis elementum tempor. Vivamus mauris nulla, volutpat vitae condimentum quis, consequat eget nisi. Sed sodales tempor orci, quis venenatis ante suscipit id. Mauris a euismod dui. Ut ullamcorper et quam eget dictum. Phasellus placerat lacinia sapien. Nunc luctus magna vitae nibh blandit, non bibendum elit pharetra. Nullam non nibh ac metus euismod sagittis at in ligula. Duis a consequat lectus. Vivamus finibus orci a euismod tincidunt. Donec vel laoreet massa.</Paragraph>
          </Sheet.ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
