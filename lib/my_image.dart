import 'package:flutter/material.dart';

class MyImage extends StatefulWidget {
  const MyImage({super.key});

  @override
  State<MyImage> createState() => _MyImageState();
}

class _MyImageState extends State<MyImage> {
  final List<String> _images = [
    'https://picsum.photos/1080/720',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PnNUCJmamJTU5y-CTshMewHaGF%26pid%3DApi&f=1&ipt=ae9999208546fb403705755860ba0977c998c67a4c0cccc31f6866f3ebce99d3&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Ffacebook-like-icon%2Ffacebook-like-icon-20.jpg&f=1&nofb=1&ipt=0da1393a568caad4dbcbf9aa104ef1c694d33625997b7e140e56eef8043fdb89&ipo=images'
  ];
  int _currentIndex = 0;

  void _nextImage() {
    setState(() {
      _currentIndex = (_currentIndex + 1) % _images.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My Image Dor"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              clipBehavior: Clip.hardEdge,
              height: 250,
              margin: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                color: Colors.amber,
              ),
              child: Image.network(
                _images[_currentIndex],
                fit: BoxFit.cover,
              ),
            ),
            ElevatedButton(
              onPressed: _nextImage,
              child: const Text("Next",),
            ),
            Image.asset(
              'assets/android.png',
              width: 80,
            )
          ],
        ),
      ),
    );
  }
}
