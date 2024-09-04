import 'package:flutter/material.dart';

class ImageMy extends StatefulWidget {
  const ImageMy({super.key});

  @override
  State<ImageMy> createState() => _ImageMyState();
}

class _ImageMyState extends State<ImageMy> {
  final List<String> _imagesUrl = [
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.psdgraphics.com%2Ffile%2Fdislike-symbol.jpg&f=1&nofb=1&ipt=a053aacdba08229a27e528f1204a671010aa96ee7a6385b8986720a5f90e9544&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Ffacebook-like-icon%2Ffacebook-like-icon-20.jpg&f=1&nofb=1&ipt=0da1393a568caad4dbcbf9aa104ef1c694d33625997b7e140e56eef8043fdb89&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldatlas.com%2Fr%2Fw1200%2Fupload%2F85%2Fb8%2Ff0%2Fshutterstock-691092586.jpg&f=1&nofb=1&ipt=7fefa8685d1308879e9102cc912c5c98a411a9f64ca54df7938c2f5277583d7f&ipo=images"
  ];

  int _index = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Image", style: TextStyle(
          fontFamily: "NewAmsterdam"
        ),),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Image.network(
              _imagesUrl[_index],
              width: 250,
              height: 100,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: _index == 0
                      ? null
                      : () {
                          setState(() {
                            _index--;
                          });
                        },
                  child: const Icon(Icons.navigate_before),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _index = 0;
                    });
                  },
                  child: const Text("reset"),
                ),
                ElevatedButton(
                  onPressed: _index == (_imagesUrl.length) - 1
                      ? null
                      : () {
                          setState(() {
                            _index++;
                          });
                        },
                  child: const Icon(Icons.navigate_next),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
