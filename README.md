Gender Control

Before using PCF Gender Control, make sure that your Option-Set/Choice field has been initialized with the following values in your Dynamics 365:

Label	Value

Male:	1

Female:	2

Other:	3


•	If you want to use the control without any customization, then just import the zip file in Dynamics 365 by navigating through the following path:

o	"GenderControl-master/GenderControlSolution/bin/Debug/GenderControlSolution.zip"

•	If you want to make any changes in the control, then perform the following steps after you have completed making your changes in the code:

o	Delete all the content in the "GenderControl-master/GenderControlSolution" folder.

o	Open the terminal in the Visual Studio Code. (Ctrl + `)

o	Write the following commands:

	npm install

	npm run build

o	Go inside the "GenderControl-master/GenderControlSolution" folder by writing the following command:

	cd .\GenderControlSolution\

o	Now write the following command:

	pac solution init --publisher-name PCFGEN --publisher-prefix pcfgen

	pac solution add-reference --path ..\

	dotnet build

o	By implementing the above-mentioned steps, a new zip file will be generated that can be used for importing your newly customized solution into Dynamics 365.
