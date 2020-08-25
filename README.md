# Face Expression Recognition 

The application allows you to detect facial expressions, like:

- Angry
- Disgust
- Fear
- Happy
- Sad
- Surprise
- Neutral

You can choose images or if you wish you can take a picture of your face to detect the expression.

**Important Note:** The images or photos AREN'T STORED. 

The data for this application consists of 48x48 pixel grayscale images of faces. The faces have been automatically registered so that the face is more or less centered and occupies about the same amount of space in each image. Each image corresponds to a facial expression in one of seven categories (0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Sad, 5=Surprise, 6=Neutral). The dataset contains approximately 36K images.

You can see a demo here:

https://facerecognition.jenikaec.com/

This projects was created using the following technologies:

- Face Expression Recognition [Dataset](https://www.kaggle.com/jonathanoheix/face-expression-recognition-dataset)
- Google [Teachable Machine](https://teachablemachine.withgoogle.com/) tool for Generate our AI model.
- [Angular](https://angular.io/docs) as Frontend Framework

In addition to this we have used [Google Colab](https://colab.research.google.com/) for our CNN models.

- [Notebook 1](https://colab.research.google.com/drive/1YUXIUC04UV6SBpngonuRCFYHeMV72Fg7?usp=sharing) - CNN for Face Expression Recognition with Images Dataset. 
- [Notebook 2](https://colab.research.google.com/drive/1v03vF0raI1gGr10aDfJFR_t559gr7-3V?usp=sharing) - CNN for Face Expression Recognition with same Dataset on [CSV format](https://www.kaggle.com/shawon10/facial-expression-detection-cnn/?select=fer2013.csv). 

**NOTE:** For the use of this notebook, please generate your **kaggle.json** file  in your personal profile in [Kaggle](https://www.kaggle.com)

## Installation

If you download the source code, please execute, inside **frontend** folder:

```
npm install
```

After that, execute: ```ng serve```, and that's all.

If you use Docker, in the main folder execute 
```
docker-compose up --build
```
## Students:

- Jean Carlos Alarcón
- Edgar Andrés Soto

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
