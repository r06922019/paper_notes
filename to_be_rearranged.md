# Paper notes (To be rearranged)

## [1711.06077 The Perception-Distortion Tradeoff](https://arxiv.org/abs/1711.06077)

1. Distortion &rarr; The "dissimilarity" between 2 images, ex. L2_loss
2. Perception &rarr; Visual quality, can be related to deep features such as perceptual loss
3. Given an irreversible degradation, it is proven in this work that to achieve better visual quality, more distortion must be included, which means that a slight drop in PSNR is needed. 
4. By empirical tests, the tradeoff is also confirmed 
5. GANs with the loss function containing both adversarial loss and mse loss (or any other distortion based loss) is considered to be an estimate to minimize both the distortion and maximize the perception, and the weight between the loss terms is exactly the amount of tradeoff.
6. SRGAN is an example of having more distortion (lower PSNR or worse in other similarity metrics) but better perceptual quality according to human opinion scores
7. Therefore, it is also proposed that both FR (_full-reference_, similarity between the answer) and NR (_no-reference_, highly correlated with human mean-opinion-scores) metrics should be considered when benchmarking algorithms about restoration tasks.
8. When being near the bound of perception-distortion, distortion and perceptual quality are anti-correlated.
9. 

## [1703.09912 One Network to Solve Them All — Solving Linear Inverse Problems using Deep Projection Models](https://arxiv.org/abs/1703.09912)

1. 