/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Wines: undefined;
  Spirits: undefined;
  Search: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  WineDetailsScreen: undefined;
};
 
export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Wine = {
  id: string,
  title: string,
  front: string,
  back: string,
  sell: string,
  poster: string,
}
