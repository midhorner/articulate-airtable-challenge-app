import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
// Using latest Chakra version with the cli snippets means wrapping the app in Provider
// suppressHydrationWarning recommended per Chakra documentation
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{colorScheme: "light",backgroundColor: "#FAFFFF"}}>
        <body style={{backgroundColor: "#FAFFFF"}}>
          <Provider>
            <Theme appearance="light" style={{backgroundColor: "#FAFFFF"}}>
              {children}
            </Theme>            
          </Provider>
        </body>
    </html>
  );
}