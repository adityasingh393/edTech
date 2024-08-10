import { CardContainerProps, CardData } from "../Components/CardComponent";

export const cardsData: (CardContainerProps & CardData)[] = [
    {
      Images: require('../../../Assets/Images/Java.png'),
      CourseTitle: 'Course 1',
      CourseDescription: 'Learn the basics of Course 1.',
      NoOfEnrollments: 120,
    },
    {
      Images: require('../../../Assets/Images/Python.png'),
      CourseTitle: 'Course 2',
      CourseDescription: 'Advanced techniques in Course 2.',
      NoOfEnrollments: 200,
    },
    {
        Images: require('../../../Assets/Images/react-native.png'),
        CourseTitle: 'Course 2',
        CourseDescription: 'Advanced techniques in Course 2.',
        NoOfEnrollments: 200,
      },
      {
        Images: require('../../../Assets/Images/Java.png'),
        CourseTitle: 'Course 2',
        CourseDescription: 'Advanced techniques in Course 2.',
        NoOfEnrollments: 200,
      },
  ];