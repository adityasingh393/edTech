import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    marginTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subscribeButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 30,
  },
  gradientButton: {
    padding: 15,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoCardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  videoCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#888',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    width: '90%',
    height: 150,
  },
  videoButtonText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#6177EE',
    borderRadius: 5,
    marginBottom: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  video: {
    width: '90%',
    height: 200,
  },
});
