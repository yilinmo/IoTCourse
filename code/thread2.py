import threading

x = 0


def increment_global():
    global x
    x += 1


def taskofThread():
    for _ in range(100000):
        increment_global()


def main():
    global x
    x = 0
    t1 = threading.Thread(target=taskofThread)
    t2 = threading.Thread(target=taskofThread)

    t1.start()
    t2.start()

    t1.join()
    t2.join()


if __name__ == "__main__":
    for i in range(5):
        main()
        print("x = {1} after Iteration {0}".format(i, x))
