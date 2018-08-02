# Notes
So many papers, note the notes.

## 2018/7/31~8/1 Checkerboard artifacts

### [1707.02937 Checkerboard artifact free sub-pixel](https://arxiv.org/abs/1707.02937)
### [1806.02658 Super-Resolution using Convolutional Neural Networks without Any Checkerboard Artifacts](https://arxiv.org/abs/1806.02658)
### [Article from distill.pub](https://distill.pub/2016/deconv-checkerboard/)

1. [distill.pub](https://distill.pub/2016/deconv-checkerboard/)   
Make sure to try the awesome demo of the page!! Surely helps understanding.

    1. deconvolutions are prone to artifacts
        > In addition to the high frequency checkerboard-like artifacts we observed above, early deconvolutions can create lower-frequency artifacts
    	
    2. Resize (NN or bilinear) convolution may be a cure to artifacts, but this might not be the final solution
        > Another approach is to separate out upsampling to a higher resolution from convolution to compute features. For example, you might resize the image (using nearest-neighbor interpolation or bilinear interpolation) and then do a convolutional layer. This seems like a natural approach, and roughly similar methods have worked well in image super-resolution (eg. [9](https://arxiv.org/pdf/1501.00092.pdf)).   
        
    3. Artifacts also present in temrs of gradient &rarr; GANs also suffer
        > We’ve found that this does happen in some cases. When the generator is neither biased for or against checkerboard patterns, strided convolutions in the discriminator can cause them.   
		
    4. Quick fix is switching from deconv to NN-resize then conv, experiements show that parameters are compatible   

2. [1707.02937 Checkerboard artifact free sub-pixel convolution: A note on sub-pixel convolution, resize convolution and convolution resize](https://arxiv.org/abs/1707.02937)
	
    1. Source of artifacts : deconvolution overlap, random initialization, loss functions
        > The most prominent problem associated with the deconvolution layer is the presence of checkerboard artifacts in output images and dense labels as shown in Figure 1. To combat this problem, smoothness
constraints, post processing and different architecture designs have been proposed [6,13,24]. Odena et al. [2] highlight three sources of checkerboard artifacts: deconvolution overlap, random initialization and loss functions.

    2. Sub-pixel convolution also suffers if random initialized
	
    3. If NN-resize then conv is switched to conv then NN-resize, guarantees checkerboard free reconstructions, but upsampling is not trainable.    
	&rarr; It might be beneficial to initialize sub-pixel convolution to behave like NN-resize
	
	4. implementations found (2018/07/31)   
		[https://github.com/kostyaev/ICNR](https://github.com/kostyaev/ICNR)
		[https://github.com/pytorch/pytorch/pull/5429/files?diff=split](https://github.com/pytorch/pytorch/pull/5429/files?diff=split)
	
3. [1806.02658 Super-Resolution using Convolutional Neural Networks without Any Checkerboard Artifacts](https://arxiv.org/abs/1806.02658)
    1. Intro & Background   
        Checkerboard artifacts have been studied in linear domain
	    > On the other hand, checkerboard artifacts have been studied to design linear multirate systems including filter banks and wavelets [19–22]. In addition, it is well-known that checkerboard artifacts are caused by the time-variant property of interpolators in multirate systems, and the condition for avoiding these artifacts have been given [19–21]. However, the condition to avoid checkerboard artifacts
for linear systems can not be applied to CNNs due to the nonlinearity of CNNs.

    2. The preparation section in the paper reviews a lot of SR techniques and overviews of checkerboard artifacts for linear systems, which seems to be way too difficult for people who is poor at signal processing...like me :(
	
    3. Not very sure about my understanding, but it seems like the checkerboard artifacts arouse from the different steady state values of channels of feature map, causing the unit step response overall has a periodic characteristic. See section 3.2 in the paper.
		
    4. Due to the non-linearity of CNN,
        > This is a non-linear system due to the bias b.   
	
		It is hard to avoid checkerboard artifacts, for the condition to avoid that is each filter has identical steady-state values. (Formulas in Section 3.3)
		
    5. Solution in Section 3.3   
        Not really sure ... but the form of the filter H0 seems to be a box filter to me ...
        > In this paper, we propose to add the kernel of the zero-order hold with factor U, i.e. H0 in eq.(4), after upsampling layers as shown in Fig. 6. In this structure, the output signal from H0 can be a constant value, even when an arbitrary periodic signal is inputted to H0. As a result, Fig. 6 can satisfy eq.(7).
		
    6. Implementations   
        qq
4. Thoughts   
    1. May be useful in replacing the upsampling layers in GAN, trying (7/31)

5. Exps & Notes
    1. 8/2 commit 88cae57   
        1. Even with ICNR (proposed in [1707.02937 Checkerboard artifact free sub-pixel convolution: A note on sub-pixel convolution, resize convolution and convolution resize](https://arxiv.org/abs/1707.02937)) still getting checkerboard artifacts, might arise from the convs in discriminator? 
            1. The conv-layers in the discrimintaor have k_size % stride != 0
            2. The discriminator's receptive field is too small, which is discussed in Sec 4.4 of [1611.07004 Image-to-Image Translation with Conditional Adversarial Networks](https://arxiv.org/abs/1611.07004) )
        
    2. 
6. 
