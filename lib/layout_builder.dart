import 'package:flutter/material.dart';

class MyLayoutBuilder extends StatelessWidget {
  const MyLayoutBuilder({super.key});

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Colors.blueGrey,
      body: SafeArea(
        child: Row(
          children: [
            Expanded(
              child:
                  LayoutBuilder(builder: (context, BoxConstraints constraints) {
                return Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(
                      "MediaQuery: ${screenSize.width.toStringAsFixed(2)}",
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      "LayoutBuilder: ${constraints.maxWidth.toStringAsFixed(2)}",
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ],
                );
              }),
            ),
            Expanded(
                flex: 3,
                child: LayoutBuilder(
                    builder: (context, BoxConstraints constraints) {
                  return Container(
                    color: Colors.white,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text(
                          "MediaQuery: ${screenSize.width.toStringAsFixed(2)}",
                          style: const TextStyle(
                            color: Colors.blueGrey,
                            fontSize: 18,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        Text(
                          "LayoutBuilder: ${constraints.maxWidth.toStringAsFixed(2)}",
                          style: const TextStyle(
                            color: Colors.blueGrey,
                            fontSize: 18,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  );
                })),
          ],
        ),
      ),
    );
  }
}
